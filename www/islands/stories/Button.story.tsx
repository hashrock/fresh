import Button from "../../components/gallery/Button.tsx";
import IconHappy from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mood-crazy-happy.tsx";
export default function Stories() {
  return (
    <>
      <div class="flex gap-4">
        <Button>
          Click me
        </Button>
        <Button class="flex gap-1">
          <IconHappy
            class="w-6 h-6 inline-block text-gray-500"
            aria-hidden="true"
          />
          <div>
            With an Icon
          </div>
        </Button>
        <Button disabled>
          Disabled
        </Button>
      </div>
    </>
  );
}

export const description = `
**Copy code from here**

[https://github.com/denoland/fresh/blob/main/www/components/gallery/Button.tsx](https://github.com/denoland/fresh/blob/main/www/components/gallery/Button.tsx)
`;
