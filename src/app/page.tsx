"use client"
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

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

// Bookend data defined outside component to avoid re-renders
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
          url: 'https://24x7servicescenters.com'
        }
      ]
    }
  ]
};

const AMPWebStory: React.FC = () => {
  const storyMetadata = {
    title: "My Travel Adventure",
    posterImage: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    publisher: "Your Name",
    publisherLogoSrc: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
  };

  const pages: StoryPage[] = [
    {
      id: "cover",
      title: "Amazing Mountain Journey",
      description: "Follow my adventure through the mountains",
      imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"  // Using placeholder to avoid external URL issues
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
        <script 
          async 
          custom-element="amp-story" 
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        />
        <script 
          async 
          custom-element="amp-video" 
          src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
        />
        <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
        <noscript>
          <style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
        </noscript>
      </Head>

      <amp-story
        standalone="true"
        title={storyMetadata.title}
        publisher={storyMetadata.publisher}
        publisher-logo-src={storyMetadata.publisherLogoSrc}
        poster-portrait-src={storyMetadata.posterImage}
        supports-landscape="true"
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
              <div className="flex flex-col h-full justify-end pb-12 p-4">
                <h1 
                  className="text-white text-4xl font-bold mb-4"
                  animate-in="fly-in-bottom"
                  animate-in-delay="0.3s"
                  animate-in-duration="0.5s"
                >
                  {page.title}
                </h1>
                <p 
                  className="text-white text-xl"
                  animate-in="fly-in-bottom"
                  animate-in-delay="0.5s"
                  animate-in-duration="0.5s"
                >
                  {page.description}
                </p>
              </div>
            </amp-story-grid-layer>
            
            <amp-story-grid-layer template="vertical">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-600">
                <div 
                  className="h-full bg-white" 
                  animate-in="expand" 
                  animate-in-duration="7s"
                />
              </div>
            </amp-story-grid-layer>
          </amp-story-page>
        ))}

        <amp-story-bookend 
          layout="nodisplay"
          dangerouslySetInnerHTML={{
            __html: `
              <script type="application/json">
                ${JSON.stringify(bookendData)}
              </script>
            `
          }}
        />
      </amp-story>
    </>
  );
};

export default AMPWebStory;