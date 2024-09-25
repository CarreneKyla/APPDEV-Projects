import React from 'react';
import Specs from './Specs';
import keyboardImage from './keyboard.png';

const keyboardData = {
  model: 'MODEL: KB-X1000',
  overview: 'PRODUCT OVERVIEW: The KB-X1000 is a high-performance mechanical keyboard designed for gamers, professionals, and everyday users who demand precision and comfort. It features customizable RGB backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming experience.',
  specs: {
    SwitchType: 'Cherry MX Red (Mechanical)',
    KeyLayout: 'Full-size (104 keys)',
    Backlighting: 'RGB with customizable colors',
    Connectivity: 'Wired (USB 2.0)',
    Dimensions: '440 mm x 135 mm x 35 mm',
    Weight: '1.2 kg',
    CableLength: '1.8 meters',
    AdditionalFeatures: 'Anti-ghosting, N-key rollover, dedicated media controls',
  },
  box: {
    items: [
      'KB-X1000 Keyboard',
      'USB Cable',
      'User Manual',
      'Keycap Removal Tool',
      'Warranty Card',
    ],
  },
  features: [
    'Customizable RGB Backlighting',
    'Mechanical Switches',
    'Programmable Keys',
    'Anti-Ghosting & N-Key Rollover',
    'Dedicated Media Controls',
  ],
  setupInstructions: [
    'Unboxing: Carefully remove the keyboard and accessories from the box.',
    'Connecting the Keyboard: Plug the USB cable into an available USB port on your computer. The keyboard should be automatically recognized and ready for use. No additional drivers are required.',
    'Software Installation (Optional): Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting. Follow the on-screen instructions to install the software.',
    'Keycap Removal and Replacement: Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement. Replace keycaps by aligning them over the switch and pressing down until they click into place.',
  ],
  usageInstructions: [
    'Basic Typing: Simply start typing; the keyboard is pre-configured with standard key mappings.',
    'Customizing Backlighting: Press Fn + F9 to cycle through preset lighting effects. Use the configuration software to create custom lighting profiles.',
    'Programming Keys: Open the configuration software, select the key you want to program, assign a macro or function, and save your changes.',
    'Using Media Controls: Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control.',
  ],
  troubleshooting: [
    'Keyboard Not Responding: Ensure the USB connection is secure. Try connecting the keyboard to a different USB port. Restart your computer if necessary.',
    'Backlighting Not Working: Check if the backlight is disabled or set to a minimal brightness level. Verify that the configuration software is properly installed.',
    'Key Not Registering: Confirm that no physical obstructions are affecting the key. Test the key in different applications to determine if the issue is software-related.',
  ],
  maintenance: [
    'Cleaning: Disconnect the keyboard from the computer. Use a soft, dry cloth to clean the surface. For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.',
    'Storage: Store the keyboard in a cool, dry place. Avoid exposure to liquids or extreme temperatures.',
  ],
  warranty: '2 years from the date of purchase',
  support: {
    website: 'www.keyboardcompany.com',
    email: 'support@keyboardcompany.com',
    hotline: '1-800-555-1234',
  },
};

const Keyboard = () => {
  return (
    <div>
      <h2>{keyboardData.model}</h2>
      <img src={keyboardImage} alt={keyboardData.model} />
      <p>
        <strong>{keyboardData.overview.split(': ')[0]}: </strong>
        <span>{keyboardData.overview.split(': ')[1]}</span>
      </p>
      <Specs specs={keyboardData.specs} />

      <h3>Key Features</h3>
      <ul className="centered-list">
        {keyboardData.features.map((feature, index) => (
          <li key={index}>
            <strong>{feature}: </strong><span>{/* Add any description if needed */}</span>
          </li>
        ))}
      </ul>

      <h3>Setup Instructions</h3>
      <ul className="centered-list">
        {keyboardData.setupInstructions.map((instruction, index) => {
          const [title, description] = instruction.split(': ');
          return (
            <li key={index}>
              <strong>{title}: </strong><span>{description}</span>
            </li>
          );
        })}
      </ul>

      <h3>Usage Instructions</h3>
      <ul className="centered-list">
        {keyboardData.usageInstructions.map((instruction, index) => {
          const [title, description] = instruction.split(': ');
          return (
            <li key={index}>
              <strong>{title}: </strong><span>{description}</span>
            </li>
          );
        })}
      </ul>

      <h3>Troubleshooting</h3>
      <ul className="centered-list">
        {keyboardData.troubleshooting.map((issue, index) => {
          const [title, description] = issue.split(': ');
          return (
            <li key={index}>
              <strong>{title}: </strong><span>{description}</span>
            </li>
          );
        })}
      </ul>

      <h3>Maintenance and Care</h3>
      <ul className="centered-list">
        {keyboardData.maintenance.map((care, index) => {
          const [title, description] = care.split(': ');
          return (
            <li key={index}>
              <strong>{title}: </strong><span>{description}</span>
            </li>
          );
        })}
      </ul>

      <h3>Warranty</h3>
      <p>
        <strong>Warranty:</strong> <span>{keyboardData.warranty}</span>
      </p>

      <h3>Support</h3>
      <p>
        <strong>For assistance:</strong> visit <a href={keyboardData.support.website}>{keyboardData.support.website}</a>, or contact customer support via email at <span>{keyboardData.support.email}</span> or call <span>{keyboardData.support.hotline}</span>.
      </p>

      <footer>
      <strong><p>Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!</p>
        <p>&copy;{new Date().getFullYear()} My Keyboard Showcase || By: Carrene Kyla M. Lacson</p></strong>
      </footer>
    </div>
  );
};

export default Keyboard;
