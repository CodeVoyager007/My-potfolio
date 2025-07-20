'use client';

import React, { useState } from "react";
import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { motion } from "framer-motion";

const quickStats = [
  { label: 'Certifications', value: '27+' },
  { label: 'Coding Since', value: 'Feb 2023' },
  { label: 'Hackathons (GIAIC)', value: '3' },
  { label: 'CS50x Puzzle Day', value: '9/9 (Individual)' },
];

const techStack = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'C', 'TypeScript'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'LiteLLM', 'OpenAI Agents SDK'],
  },
  {
    category: 'AI & LLM Tools',
    items: ['OpenAI Agents SDK', 'LiteLLM', 'OpenRouter', 'Google Gemini', 'Groq (intro)'],
  },
  {
    category: 'Package Managers',
    items: ['uv', 'pip', 'npm'],
  },
  {
    category: 'Tools & Infrastructure',
    items: ['Git & GitHub', 'Postman', 'Vercel', 'Streamlit', 'Chainlit', 'Canva'],
  },
  {
    category: 'Platforms',
    items: ['Hashnode', 'Medium'],
  },
];

const quote = {
  author: 'Mark Zuckerberg',
  text: '&ldquo;The biggest risk is not taking any risk.&rdquo;',
};

export default function Home() {
  // Remove newsletter state, handlers, and the entire newsletter signup section (motion.div and related code)

  return (
    <Column maxWidth="m" gap="xl" horizontal="center" style={{ width: '100%', maxWidth: '100%' }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m" style={{ width: '100%' }}>
        <Column maxWidth="s" style={{ width: '100%' }}>
          {home.featured && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false} href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l" style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.1'
            }}>
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              lineHeight: '1.4'
            }}>
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Flex gap="12" horizontal="start" style={{ 
              flexWrap: 'wrap',
              gap: 'var(--static-space-12)',
              '@media (max-width: 480px)': {
                flexDirection: 'column',
                alignItems: 'stretch'
              }
            }}>
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
              style={{
                '@media (max-width: 480px)': {
                  width: '100%',
                  justifyContent: 'center'
                }
              }}
            >
              <Flex gap="8" vertical="center" paddingRight="4" style={{
                '@media (max-width: 480px)': {
                  justifyContent: 'center'
                }
              }}>
                {about.avatar.display && (
                    <Avatar marginRight="8" src={person.avatar} size="s" />
                )}
                <Text>About me</Text>
              </Flex>
            </Button>
              <a
                href="/ayesha's-resume.pdf"
                download
                style={{
                  display: 'inline-block',
                  background: 'var(--brand-background-strong)',
                  color: '#fff',
                  fontWeight: 600,
                  borderRadius: 8,
                  padding: '12px 24px',
                  textDecoration: 'none',
                  fontSize: 16,
                  marginLeft: 12,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  '@media (max-width: 480px)': {
                    marginLeft: 0,
                    marginTop: 12,
                    width: '100%',
                    textAlign: 'center',
                    boxSizing: 'border-box'
                  }
                }}
              >
                Download Resume
              </a>
            </Flex>
          </RevealFx>
        </Column>
        {/* Quick Stats Section */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }} viewport={{ once: true }} style={{ margin: '32px 0 0', width: '100%' }}>
          <Flex gap="24" wrap horizontal="center" style={{ 
            background: "var(--surface-background)", 
            borderRadius: 16, 
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)', 
            padding: 24,
            width: '100%',
            '@media (max-width: 768px)': {
              padding: 16,
              gap: 16
            },
            '@media (max-width: 480px)': {
              padding: 12,
              gap: 12
            }
          }}>
            {quickStats.map((stat) => (
              <Column key={stat.label} style={{ 
                minWidth: 120, 
                alignItems: 'center',
                flex: 1,
                '@media (max-width: 768px)': {
                  minWidth: 100
                },
                '@media (max-width: 480px)': {
                  minWidth: 'auto',
                  width: '50%'
                }
              }}>
                <Text variant="display-strong-m" style={{ 
                  color: 'var(--brand-background-strong)', 
                  fontWeight: 700,
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)'
                }}>{stat.value}</Text>
                <Text variant="label-default-m" style={{ 
                  color: 'var(--neutral-solid-medium)',
                  fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                  textAlign: 'center'
                }}>{stat.label}</Text>
              </Column>
            ))}
          </Flex>
        </motion.div>
        {/* Animated Tech Stack Section */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring', delay: 0.1 }} viewport={{ once: true }} style={{ 
          margin: '48px 0 0', 
          background: 'var(--surface-background)', 
          borderRadius: 16, 
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)', 
          padding: 24,
          width: '100%',
          '@media (max-width: 768px)': {
            margin: '32px 0 0',
            padding: 16
          },
          '@media (max-width: 480px)': {
            margin: '24px 0 0',
            padding: 12
          }
        }}>
          <Heading variant="heading-strong-l" style={{ 
            marginBottom: 16, 
            color: 'var(--brand-background-strong)',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)'
          }}>Tech Stack</Heading>
          <Flex direction="column" gap="24" style={{
            '@media (max-width: 768px)': {
              gap: 16
            },
            '@media (max-width: 480px)': {
              gap: 12
            }
          }}>
            {techStack.map((cat, idx) => (
              <Column key={cat.category} gap="8" style={{
                '@media (max-width: 480px)': {
                  gap: 6
                }
              }}>
                <Text variant="label-default-l" style={{ 
                  color: 'var(--brand-background-strong)', 
                  fontWeight: 600,
                  fontSize: 'clamp(1rem, 3vw, 1.1rem)'
                }}>{cat.category}</Text>
                <Flex gap="12" wrap horizontal="start" style={{
                  '@media (max-width: 768px)': {
                    gap: 8
                  },
                  '@media (max-width: 480px)': {
                    gap: 6
                  }
                }}>
                  {cat.items.map((item, i) => (
                    <motion.div key={item} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i, duration: 0.4, type: 'spring' }}>
                      <Badge background="neutral-alpha-medium" paddingX="12" paddingY="s" textVariant="label-default-m" style={{ 
                        fontWeight: 500,
                        fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
                        '@media (max-width: 480px)': {
                          padding: '4px 8px'
                        }
                      }}>{item}</Badge>
                    </motion.div>
                  ))}
                </Flex>
              </Column>
            ))}
          </Flex>
        </motion.div>
        {/* Inspirational Quote Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring', delay: 0.2 }} viewport={{ once: true }} style={{ 
          margin: '48px 0 0',
          width: '100%',
          '@media (max-width: 768px)': {
            margin: '32px 0 0'
          },
          '@media (max-width: 480px)': {
            margin: '24px 0 0'
          }
        }}>
          <Flex direction="column" style={{ 
            maxWidth: 520, 
            margin: '0 auto', 
            textAlign: 'center', 
            alignItems: 'center',
            padding: '0 16px',
            '@media (max-width: 480px)': {
              padding: '0 8px'
            }
          }}>
            <Text variant="heading-default-l" style={{ 
              fontStyle: 'italic', 
              marginBottom: 8,
              fontSize: 'clamp(1.1rem, 3.5vw, 1.3rem)',
              lineHeight: '1.4'
            }}>
              {quote.text}
            </Text>
            <Text variant="label-default-m" style={{ 
              color: 'var(--brand-background-strong)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
            }}>— {quote.author}</Text>
          </Flex>
        </motion.div>
      </Column>
    </Column>
  );
}
