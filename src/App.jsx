import React from 'react';
import './App.css'
import Accordian from './components/Accordian'
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';

function App() {

  // Accordian
  const accordionItems = [
    {

      title: "What are accordion components?",
      content:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {

      title: "What are they used for?",
      content:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {

      title: "Accordion as a musical instrument",
      content:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {

      title: "Can I create an accordion component with a different framework?",
      content:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];

  // ImageSlider
  const images = [
    'https://smartwatermagazine.com/sites/default/files/styles/thumbnail-830x455/public/what_is_a_river.jpg?itok=7SHK_wQm',
    'https://shoalconservation.org/wp-content/uploads/2023/02/dan-roizer-GygPFmXGD1o-unsplash-scaled.jpg',
    'https://cdn.pixabay.com/photo/2016/08/12/20/14/river-1589616_640.jpg',
    // Add more image URLs as needed
  ];

  return (
    <>
      <div className="App">
        <h1 style={{ display: "flex ", justifyContent: "center" }}>Accordion Example</h1>
        <Accordian items={accordionItems} />

        <h1 style={{ display: "flex ", justifyContent: "center" }}>Star Rating Example</h1>
        <StarRating totalStars={5} />

        <h1 style={{ display: "flex ", justifyContent: "center" }}>Image Slider Example</h1>
      <ImageSlider images={images} />
      </div>
    </>
  )
}

export default App
