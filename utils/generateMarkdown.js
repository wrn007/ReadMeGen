// returns license badge, or an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  };

  if (licenseBadges.hasOwnProperty(license)) {
    return `![License](${licenseBadges[license]})`;
  }

  return '';
}

// Returns license link, or an empty string
function renderLicenseLink(license) {

  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
   
  };
  if (licenseLinks.hasOwnProperty(license)) {
    return licenseLinks[license];
  }


  return '';
}

//License section of read me
function renderLicenseSection(license) {
  if (license) {
    return `
## License

This project is licensed under the [${license} license](${renderLicenseLink(license)}).
`;
  }

  return '';
}

// generates readme
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description || 'No description provided.'}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation || 'No installation instructions provided.'}

## Usage
${data.usage || 'No usage information provided.'}

${licenseSection}

## Contributing
${data.contributing || 'No contributing guidelines provided.'}

## Tests
${data.tests || 'No test instructions provided.'}

## Questions
For additional questions, contact [${data.username || 'GitHub Username'}](https://github.com/${data.username}) or email [${data.email || 'Email'}](mailto:${data.email}).
`;
}


module.exports = generateMarkdown;
