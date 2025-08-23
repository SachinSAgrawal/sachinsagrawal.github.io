const websites = [
  {
    icon: "https://www.svgrepo.com/show/512317/github-142.svg",
    alt: "GitHub",
    url: "https://github.com/sachinsagrawal",
    text: "github.com/sachinsagrawal"
  },
  {
    icon: "https://github.com/pagedeploy/cdn/blob/main/fitbit.png?raw=true",
    alt: "Fitbit",
    url: "https://pagedeploy.github.io/sagrawal8fitbitdev",
    text: "github.io/sagrawal8fitbitdev"
  },
  {
    icon: "https://www.svgrepo.com/show/312968/robot.svg",
    alt: "Bots",
    url: "https://pagedeploy.github.io/scisdiscordbots",
    text: "github.io/scisdiscordbots"
  },
  {
    icon: "https://www.svgrepo.com/show/474754/calculator.svg",
    alt: "Calculator",
    url: "https://pagedeploy.github.io/ti84calcdev",
    text: "github.io/ti84calcdev"
  },
  {
    icon: "https://www.svgrepo.com/show/452138/youtube.svg",
    alt: "YouTube",
    url: "https://pagedeploy.github.io/scinovuscrafted",
    text: "github.io/scinovuscrafted"
  }
];

const socials = [
  {
    icon: "https://www.svgrepo.com/show/331368/discord-v2.svg",
    alt: "Discord",
    url: "https://discord.com/users/575795042933932071",
    text: "scinovuscrafted"
  },
  {
    icon: "https://www.svgrepo.com/show/452229/instagram-1.svg",
    alt: "Instagram",
    url: "https://www.instagram.com/sachinsagrawal2",
    text: "sachinsagrawal2"
  },
  {
    icon: "https://www.svgrepo.com/show/53747/3d-printer.svg",
    alt: "Printables",
    url: "https://www.printables.com/@sachinsagrawal",
    text: "sachinsagrawal"
  },
  {
    icon: "https://www.svgrepo.com/show/452051/linkedin.svg",
    alt: "LinkedIn",
    url: "https://www.linkedin.com/in/sachinsagrawal/",
    text: "sachinsagrawal"
  }
];

function renderParagraphs(arr, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = arr.map(item => `
    <p>
      <img class="icon" src="${item.icon}" alt="${item.alt}" />
      ${item.alt}:
      <a href="${item.url}" target="_blank">${item.text}</a>
    </p>
  `).join('<br />');
}

renderParagraphs(websites, "websites-list");
renderParagraphs(socials, "socials-list");