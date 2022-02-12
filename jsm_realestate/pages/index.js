import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({purpose}) => ( 
/* m stands for margin */ <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
  <Image src= {imageUrl} width={500} height={300} alt="banner" />
  <Box p="5"/*p=padding*/>  
    <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
    <Text color="3xl" fontSize="sm" fontWeight="bold">{title}<br /></Text>
    <Text color="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}</Text>

    </Box> 
  </Flex>  
)


export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Banner purpose = { 'For Sale>' } />
      <Banner purpose = { 'For Rent>' } />

    </div>
  )
}
