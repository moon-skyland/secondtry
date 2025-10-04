// utils/client.ts
import { createPublicClient, http } from 'viem'
import { sepolia } from 'viem/chains'

export const client = createPublicClient({
  chain: sepolia,
  transport: http(process.env.NEXT_PUBLIC_RPC_URL!),
})


import { client } from './utils/client'
import contractAbi from './abi.json'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!

export async function readSomething() {
  const data = await client.readContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'yourFunctionName',
  })
  console.log("✨ Contract says:", data)
}