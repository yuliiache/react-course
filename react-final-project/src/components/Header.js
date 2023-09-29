import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";
import { useScrollDirection} from "../hooks/useScrollDirection";

const sectionLinks = [
  { title: 'Projects', anchor: 'projects' },
  { title: 'Contact Me', anchor: 'contacts'},
]

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const scrollDirection = useScrollDirection();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      sx={{
        top: scrollDirection === 'down' ? "{16}" : "0"
      }}
      position="sticky"
      height={16}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".5s"
      transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          spacing={8}
        >
          <nav>
            <HStack
              spacing={8}>
              {socials.map(({icon, url}) => (
                  <Link target='blank' href={url} key={url}>
                    <FontAwesomeIcon icon={icon} size="2x"/>
                  </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {sectionLinks.map(({title, anchor}) => (
                  <Link onClick={handleClick(anchor)} key={title}>
                    {title}
                  </Link>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
