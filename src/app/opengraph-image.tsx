import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "HornBlastFrame - Farcaster Frame Soundboard";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-[#4A148C]">
        <div tw="flex flex-col items-center bg-white/90 p-8 rounded-2xl shadow-2xl">
          <h1 tw="text-6xl font-bold text-[#4A148C] mb-4">HornBlastFrame</h1>
          <h3 tw="text-2xl text-neutral-700 text-center">
            A Farcaster Frame for blasting air horns
          </h3>
          <p tw="text-neutral-500 mt-2">by horsefacts.eth</p>
        </div>
        <div tw="absolute bottom-4 right-4 text-white text-sm">
          Powered by Farcaster Frames
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
