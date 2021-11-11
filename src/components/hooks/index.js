import { useContractCall, useContractFunction } from "@usedapp/core";
import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import abi from '../abi.json'

const contractAddress = "0x0f96Cb47A5D4C083D2341C455A249e4a7e4E8Fab";

const jpegContractInterface = new ethers.utils.Interface(abi);

const contract = new Contract(
    contractAddress,
    jpegContractInterface
)

export function useContractMethod(methodName) {
    const { state, send } = useContractFunction(contract, methodName, {});
    return { state, send };
}