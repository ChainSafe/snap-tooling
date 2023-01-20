import { SnapProvider } from "@metamask/snap-types";

export const getMetamaskVersion = async (
  wallet: SnapProvider
): Promise<string> =>
  (await wallet.request({
    method: "web3_clientVersion",
    params: [],
  })) as string;

interface Message {
  message: string;
  value: unknown | undefined;
}

export const messageCreator = (messages: Message[]): string =>
  messages
    .map(({ message, value }) => message + " " + String(value))
    .join("\n");
