import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Sidebar from '../../components/aluno/Sidebar';
import ToggleSidebarButton from '../../components/aluno/ToggleSidebarButton';
import BreadcrumbsNav from '../../components/aluno/BreadcrumbsNav';
import PostCard from '../../components/aluno/PostCard';
import SearchBar from '../../components/aluno/SearchBar';

const ListPost = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [sidebarOpen, setSidebarOpen] = useState(!isSmallScreen);

  const posts = [
    {
      title: "Primeiros passos Docker",
      description: "Lorem ipsum dolor sit amet consectetur. Facilisis sem tortor in quam nec.",
      author: "Camilla Barreto",
      image: "url_da_imagem_docker.png",
      tags: ["golang", "linux", "overflow"],
      readingTime: "postado a 5 min",
      date: "29 de Outubro de 2023",
    },
    {
      title: "Introdução ao Kubernetes",
      description: "Entenda os conceitos básicos de orquestração de contêineres e suas vantagens.",
      author: "João Silva",
      image: "url_da_imagem_kubernetes.png",
      tags: ["Kubernetes", "Orquestração", "Cloud"],
      readingTime: "postado a 5 dias",
      date: "20 de Outubro de 2023",
    },
    {
      title: "Desenvolvimento com React",
      description: "Saiba como começar a desenvolver interfaces com React e suas bibliotecas.",
      author: "Ana Paula",
      image: "url_da_imagem_react.png",
      tags: ["React", "Frontend", "JavaScript"],
      readingTime: "postado a 1 mês",
      date: "15 de setembro de 2023",
    },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
      <Sidebar isSmallScreen={isSmallScreen} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {isSmallScreen && <ToggleSidebarButton toggleSidebar={toggleSidebar} />}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <BreadcrumbsNav />
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton sx={{ color: 'white', mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
            Comunidade
          </Typography>
        </Box>
        <SearchBar />
        {posts.map((post, index) => <PostCard key={index} post={post} />)}
      </Box>
    </Box>
  );
};

export default ListPost;