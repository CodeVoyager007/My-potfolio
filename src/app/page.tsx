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
  text: '“The biggest risk is not taking any risk.”',
};

export default function Home() {
  // Remove newsletter state, handlers, and the entire newsletter signup section (motion.div and related code)

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
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
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false} href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Flex gap="12" horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
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
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
              >
                Download Resume
              </a>
            </Flex>
          </RevealFx>
        </Column>
        {/* Quick Stats Section */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }} viewport={{ once: true }} style={{ margin: '32px 0 0' }}>
          <Flex gap="24" wrap horizontal="center" style={{ background: "var(--surface-background)", borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 24 }}>
            {quickStats.map((stat) => (
              <Column key={stat.label} style={{ minWidth: 120, alignItems: 'center' }}>
                <Text variant="display-strong-m" style={{ color: 'var(--brand-background-strong)', fontWeight: 700 }}>{stat.value}</Text>
                <Text variant="label-default-m" style={{ color: 'var(--neutral-solid-medium)' }}>{stat.label}</Text>
              </Column>
            ))}
          </Flex>
        </motion.div>
        {/* Animated Tech Stack Section */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring', delay: 0.1 }} viewport={{ once: true }} style={{ margin: '48px 0 0', background: 'var(--surface-background)', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 24 }}>
          <Heading variant="heading-strong-l" style={{ marginBottom: 16, color: 'var(--brand-background-strong)' }}>Tech Stack</Heading>
          <Flex direction="column" gap="24">
            {techStack.map((cat, idx) => (
              <Column key={cat.category} gap="8">
                <Text variant="label-default-l" style={{ color: 'var(--brand-background-strong)', fontWeight: 600 }}>{cat.category}</Text>
                <Flex gap="12" wrap horizontal="start">
                  {cat.items.map((item, i) => (
                    <motion.div key={item} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i, duration: 0.4, type: 'spring' }}>
                      <Badge background="neutral-alpha-medium" paddingX="12" paddingY="s" textVariant="label-default-m" style={{ fontWeight: 500 }}>{item}</Badge>
                    </motion.div>
                  ))}
                </Flex>
              </Column>
            ))}
          </Flex>
        </motion.div>
        {/* Inspirational Quote Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring', delay: 0.2 }} viewport={{ once: true }} style={{ margin: '48px 0 0' }}>
          <Flex direction="column" style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center', alignItems: 'center' }}>
            <Text variant="heading-default-l" style={{ fontStyle: 'italic', marginBottom: 8 }}>
              {quote.text}
            </Text>
            <Text variant="label-default-m" style={{ color: 'var(--brand-background-strong)' }}>— {quote.author}</Text>
          </Flex>
        </motion.div>
      </Column>
    </Column>
  );
}
