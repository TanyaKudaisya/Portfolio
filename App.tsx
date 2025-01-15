import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Badge,
  Link,
  Card,
  CardBody,
  IconButton,
  Divider,
  useColorMode,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Moon,
  Sun,
  ExternalLink,
  Code,
  User,
  Home,
  Wrench,
  Languages,
  Heart,
  Briefcase,
} from 'lucide-react';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const navBg = useColorModeValue('white', 'gray.800');

  const skills = {
    languages: ['Python', 'Java', 'C/C++', 'SQL', 'HTML', 'CSS'],
    tools: ['VS Code', 'Intellij Idea', 'Git'],
    technologies: ['MYSQL', 'GitHub', 'Git', 'Bootstrap', 'Figma', 'Canva', 'Adobe Express', 'Wordpress'],
    softSkills: ['Problem Solving', 'Team Leadership', 'Communication', 'Agile Methodology', 'Project Management']
  };

  const projects = [
    {
      title: 'AssignEase',
      description: 'AssignEase is a digital assignment management portal built with Django, Python, Bootstrap, HTML, CSS, and JavaScript. It features dedicated dashboards for both students and teachers, enabling streamlined submissions, tracking, and real-time assistance through an integrated chatbot for an efficient user experience.',
      tags: ['HTML', 'CSS', 'Bootstrap', 'JS', 'Python', 'Django'],
      demoLink: 'https://github.com/TanyaKudaisya/AssignEase'
    },
    {
      title: 'SteedStats',
      description: 'This project predicts horse race finish times and rankings using machine learning, based on data about horses, jockeys, trainers, and race conditions. Using a Random Forest Regressor, it forecasts outcomes and compares predicted rankings with actual results, offering insights for bettors, trainers, and race organizers.',
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      demoLink: 'https://github.com/TanyaKudaisya/SteedStats'
    },
    {
      title: 'Portfolio (This)',
      description: 'This portfolio, built with React and Chakra UI, showcases my work and skills in a clean, responsive layout. Featuring smooth animations, a light/dark mode toggle, and a contact form, it reflects my focus on modern front-end development. Chakra UI ensures a sleek, accessible design, while React powers dynamic content for an engaging user experience.',
      tags: ['ReactJS', 'Chakra UI', 'HTML', 'CSS'],
      demoLink: 'https://github.com/TanyaKudaisya/Portfolio'
    },
    {
      title: 'Pixel Peeker',
      description: 'A user-friendly image search engine webpage that quickly finds and displays relevant images. Built with HTML, CSS, and JavaScript, and powered by a smart API, it helps you find just what you need in a snap.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://github.com/TanyaKudaisya/PixelPeeker'
    }
  ];

  const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <Link
      px={4}
      py={2}
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.100', 'gray.700'),
      }}
      href={href}
    >
      <HStack spacing={2}>
        {children}
      </HStack>
    </Link>
  );

  return (
    <Box bg={bg} minH="100vh">
      {/* Navbar */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg={navBg}
        px={8}
        py={4}
        boxShadow="sm"
        zIndex={100}
      >
        <Flex maxW="container.lg" mx="auto" align="center">
          <HStack spacing={8}>
            <Text
              fontSize="xl"
              fontWeight="bold"
              color={headingColor}
            >
              Tanya Kudaisya
            </Text>
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
              <NavLink href="#home">
                <Icon as={Home} />
                <Text>Home</Text>
              </NavLink>
              <NavLink href="#about">
                <Icon as={User} />
                <Text>About</Text>
              </NavLink>
              <NavLink href="#skills">
                <Icon as={Code} />
                <Text>Skills</Text>
              </NavLink>
              <NavLink href="#projects">
                <Icon as={Briefcase} />
                <Text>Projects</Text>
              </NavLink>
            </HStack>
          </HStack>
          <Spacer />
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            onClick={toggleColorMode}
            variant="ghost"
            colorScheme="purple"
          />
        </Flex>
      </Box>

      <Container maxW="container.lg" py={20}>
        {/* Hero Section */}
        <VStack spacing={8} textAlign="center" pt={20} id="home">
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl' }}
            display="flex"
            alignItems="center"
            gap={4}
          >
            Hi! I am{' '}
            <Text
              as="span"
              bgGradient="linear(to-r, purple.400, pink.400)"
              bgClip="text"
            >
              Tanya 👋
            </Text>
          </Heading>
          <VStack spacing={2}>
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              color={textColor}
              fontWeight="medium"
            >
              Computer Science
            </Text>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
            >
              Undergraduate Student
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color={textColor}
              opacity={0.8}
            >
              @G.L. Bajaj Institute of Technology and Management
            </Text>
          </VStack>
        </VStack>

        {/* Skills Section */}
        <VStack spacing={12} py={20} id="skills">
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            color={headingColor}
            display="flex"
            alignItems="center"
            gap={3}
          >
            <Icon as={Code} /> Skills
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {/* Languages */}
            <Card bg={cardBg}>
              <CardBody>
                <VStack align="start" spacing={4}>
                  <HStack>
                    <Icon as={Languages} />
                    <Heading size="md" color={headingColor}>Languages</Heading>
                  </HStack>
                  <VStack align="start" spacing={2}>
                    {skills.languages.map((skill, index) => (
                      <Badge key={index} colorScheme="purple" variant="subtle">
                        {skill}
                      </Badge>
                    ))}
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            {/* Tools */}
            <Card bg={cardBg}>
              <CardBody>
                <VStack align="start" spacing={4}>
                  <HStack>
                    <Icon as={Wrench} />
                    <Heading size="md" color={headingColor}>Tools</Heading>
                  </HStack>
                  <VStack align="start" spacing={2}>
                    {skills.tools.map((skill, index) => (
                      <Badge key={index} colorScheme="purple" variant="subtle">
                        {skill}
                      </Badge>
                    ))}
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            {/* Soft Skills */}
            <Card bg={cardBg}>
              <CardBody>
                <VStack align="start" spacing={4}>
                  <HStack>
                    <Icon as={Heart} />
                    <Heading size="md" color={headingColor}>Soft Skills</Heading>
                  </HStack>
                  <VStack align="start" spacing={2}>
                    {skills.softSkills.map((skill, index) => (
                      <Badge key={index} colorScheme="purple" variant="subtle">
                        {skill}
                      </Badge>
                    ))}
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>

        {/* Projects Section */}
        <VStack spacing={12} py={10} id="projects">
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            color={headingColor}
            display="flex"
            alignItems="center"
            gap={3}
          >
            <Icon as={Briefcase} /> Projects
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
            {projects.map((project, index) => (
              <Card
                key={index}
                bg={cardBg}
                variant="outline"
                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                transition="all 0.2s"
              >
                <CardBody>
                  <VStack align="start" spacing={4}>
                    <Heading size="md" color={headingColor}>
                      {project.title}
                    </Heading>
                    <Text color={textColor}>{project.description}</Text>
                    <HStack spacing={2} flexWrap="wrap">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} colorScheme="purple" variant="subtle">
                          {tag}
                        </Badge>
                      ))}
                    </HStack>
                    <Link href={project.demoLink} isExternal>
                      <Button
                        rightIcon={<ExternalLink size={16} />}
                        size="sm"
                        colorScheme="purple"
                      >
                        View Project
                      </Button>
                    </Link>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>

        <Divider my={10} />

        {/* Social Links */}
        <VStack spacing={6} py={10} textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl' }}
            color={headingColor}
          >
            Let's Connect
          </Heading>
          <HStack spacing={4} justify="center">
            <IconButton
              as={Link}
              href="https://github.com/TanyaKudaisya"
              aria-label="GitHub"
              icon={<Icon as={Github} boxSize={6} />}
              variant="ghost"
              colorScheme="purple"
              isExternal
            />
            <IconButton
              as={Link}
              href="https://linkedin.com"
              aria-label="LinkedIn"
              icon={<Icon as={Linkedin} boxSize={6} />}
              variant="ghost"
              colorScheme="purple"
              isExternal
            />
            <IconButton
              as={Link}
              href="https://twitter.com"
              aria-label="Twitter"
              icon={<Icon as={Twitter} boxSize={6} />}
              variant="ghost"
              colorScheme="purple"
              isExternal
            />
            <IconButton
              as={Link}
              href="mailto:your.email@example.com"
              aria-label="Email"
              icon={<Icon as={Mail} boxSize={6} />}
              variant="ghost"
              colorScheme="purple"
              isExternal
            />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;