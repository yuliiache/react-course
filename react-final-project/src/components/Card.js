import {Box, Flex, Heading, Image, Text, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box bg='white' color='black' borderRadius='10px'>
      <Image borderRadius='10px' src={imageSrc} alt={title}></Image>
        <Flex direction='column' justifyContent='space-between' >
          <VStack  p={4} spacing={4} align='start'>
              <Heading  size='l'>{title}</Heading>
              <Text color='grey' fontSize='16px'>{description}</Text>
          </VStack>
            <Text
                p={4}
                fontSize='14px'>
                See more{' '}
                <FontAwesomeIcon icon={faArrowRight} size="1x"
                />
            </Text>
        </Flex>
      </Box>
  )
};

export default Card;
