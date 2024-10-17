// pages/stories.tsx

import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

// TypeScript declarations for AMP components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'amp-story': any;
      'amp-story-page': any;
      'amp-story-grid-layer': any;
      'amp-img': any;
      'amp-story-bookend': any;
    }
  }
}

interface StoryPage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const bookendData = {
  shareProviders: ['facebook', 'twitter', 'email'],
  components: [
    {
      type: 'heading',
      text: 'Follow us for more adventures'
    },
    {
      type: 'cta-link',
      links: [
        {
          text: 'Visit our website',
          url: 'https://example.com'
        }
      ]
    }
  ]
};

const StoriesPage: NextPage = () => {
  const storyMetadata = {
    title: "My Travel Adventure",
    posterImage: "/api/placeholder/1080/1920",
    publisher: "Your Name",
    publisherLogoSrc: "/api/placeholder/100/100",
  };

  const pages: StoryPage[] = [
    {
      id: "cover",
      title: "Amazing Mountain Journey",
      description: "Follow my adventure through the mountains",
      imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
    },
    {
      id: "page1",
      title: "The Beginning",
      description: "Starting our hike at sunrise",
      imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
    },
    {
      id: "page2",
      title: "The Summit",
      description: "Reaching the peak after 6 hours",
      imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>{storyMetadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
        <link rel="canonical" href="/stories"/>
        <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
        <noscript>
          <style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
        </noscript>
        <style amp-custom>{`
          amp-story {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          }
          .story-overlay {
            background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%);
            padding: 2rem;
          }
        `}</style>
      </Head>

      <amp-story
        standalone=""
        title={storyMetadata.title}
        publisher={storyMetadata.publisher}
        publisher-logo-src={storyMetadata.publisherLogoSrc}
        poster-portrait-src={storyMetadata.posterImage}
      >
        {pages.map((page) => (
          <amp-story-page key={page.id} id={page.id} auto-advance-after="7s">
            <amp-story-grid-layer template="fill">
              <amp-img
                src={page.imageUrl}
                width="720"
                height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-duration="1s"
              />
            </amp-story-grid-layer>
            
            <amp-story-grid-layer template="vertical">
              <div className="story-overlay h-full flex flex-col justify-end">
                <h1 
                  className="text-4xl font-bold text-white mb-4"
                  animate-in="fly-in-bottom"
                  animate-in-delay="0.3s"
                  animate-in-duration="0.5s"
                >
                  {page.title}
                </h1>
                <p 
                  className="text-xl text-white"
                  animate-in="fly-in-bottom"
                  animate-in-delay="0.5s"
                  animate-in-duration="0.5s"
                >
                  {page.description}
                </p>
              </div>
            </amp-story-grid-layer>
          </amp-story-page>
        ))}

        <amp-story-bookend 
          layout="nodisplay"
          src="data:json/application;base64,eyJzaGFyZVByb3ZpZGVycyI6WyJmYWNlYm9vayIsInR3aXR0ZXIiLCJlbWFpbCJdLCJjb21wb25lbnRzIjpbeyJ0eXBlIjoiaGVhZGluZyIsInRleHQiOiJGb2xsb3cgdXMgZm9yIG1vcmUgYWR2ZW50dXJlcyJ9LHsidHlwZSI6ImN0YS1saW5rIiwibGlua3MiOlt7InRleHQiOiJWaXNpdCBvdXIgd2Vic2l0ZSIsInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20ifV19XX0="
        />
      </amp-story>
    </>
  );
};

// Enable AMP for this page
export const config = {
  amp: true
};

export default StoriesPage;