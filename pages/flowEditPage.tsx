import ReactFlow,{
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Background
} from 'reactflow'
import 'reactflow/dist/style.css'
import {
  initialEdges,
  initialNodes
} from '../store/ReactFlowStarterDeck'
import { useCallback } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { 
  Box,
  useDisclosure, 
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react'

const fLowEditPage :NextPage = () =>{
  const { isOpen, onToggle } = useDisclosure();

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <Box>
      <Head>
        <title>fLowEditPage</title>
      </Head>

      <Header
        toggle={onToggle}
        open={isOpen}
        bg={useColorModeValue('white','grey.600')}
        color={useColorModeValue('gray.600','white')}
        borderColor={useColorModeValue('gray.200','gray.900')}
        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
        textColor={useColorModeValue('gray.800','white')}
      />

      <Box
        w="800px"
        h="800px"
        top="16px"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <MiniMap/>
          <Controls/>
          <Background/>
        </ReactFlow>

      </Box>
    </Box>
  )
}

export default fLowEditPage;