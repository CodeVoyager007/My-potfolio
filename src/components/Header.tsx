"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, blog, work, journey } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type Routes = {
  "/": boolean;
  "/about": boolean;
  "/work": boolean;
  "/blog": boolean;
  "/contact": boolean;
  "/journey": boolean;
}

const typedRoutes = routes as Routes;

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={1000}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        style={{
          '@media (max-width: 768px)': {
            position: 'fixed',
            bottom: 0,
            top: 'auto',
            left: 0,
            right: 0,
            background: 'var(--page-background)',
            borderTop: '1px solid var(--neutral-alpha-weak)',
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            display: 'flex',
            visibility: 'visible',
            opacity: 1
          }
        }}
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s" style={{
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }}>
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center" style={{
          '@media (max-width: 768px)': {
            justifyContent: 'center',
            flex: 1
          }
        }}>
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
            style={{
              '@media (max-width: 768px)': {
                background: 'var(--surface-background)',
                border: '1px solid var(--neutral-alpha-weak)',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                padding: '8px',
                gap: '4px'
              }
            }}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning style={{
              '@media (max-width: 768px)': {
                gap: '8px',
                flexWrap: 'nowrap',
                overflow: 'hidden'
              }
            }}>
              {routes["/"] && (
                <ToggleButton 
                  prefixIcon="home" 
                  href="/" 
                  selected={pathname === "/"}
                  style={{
                    '@media (max-width: 768px)': {
                      minWidth: '44px',
                      minHeight: '44px',
                      padding: '8px'
                    }
                  }}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" style={{
                '@media (max-width: 768px)': {
                  display: 'none'
                }
              }} />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                    style={{
                      '@media (max-width: 768px)': {
                        minWidth: '44px',
                        minHeight: '44px',
                        padding: '8px'
                      }
                    }}
                  />
                </>
              )}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/work"
                    label={work.label}
                    selected={pathname.startsWith("/work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/work"
                    selected={pathname.startsWith("/work")}
                    style={{
                      '@media (max-width: 768px)': {
                        minWidth: '44px',
                        minHeight: '44px',
                        padding: '8px'
                      }
                    }}
                  />
                </>
              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith("/blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/blog"
                    selected={pathname.startsWith("/blog")}
                    style={{
                      '@media (max-width: 768px)': {
                        minWidth: '44px',
                        minHeight: '44px',
                        padding: '8px'
                      }
                    }}
                  />
                </>
              )}
              {routes["/contact"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="mail"
                    href="/contact"
                    label="Contact"
                    selected={pathname.startsWith("/contact")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="mail"
                    href="/contact"
                    selected={pathname.startsWith("/contact")}
                    style={{
                      '@media (max-width: 768px)': {
                        minWidth: '44px',
                        minHeight: '44px',
                        padding: '8px'
                      }
                    }}
                  />
                </>
              )}
              {typedRoutes["/journey"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="timeline"
                    href="/journey"
                    label={journey.label}
                    selected={pathname.startsWith("/journey")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="timeline"
                    href="/journey"
                    selected={pathname.startsWith("/journey")}
                    style={{
                      '@media (max-width: 768px)': {
                        minWidth: '44px',
                        minHeight: '44px',
                        padding: '8px'
                      }
                    }}
                  />
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" style={{
                    '@media (max-width: 768px)': {
                      display: 'none'
                    }
                  }} />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center" style={{
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }}>
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
