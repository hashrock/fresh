import Counter from "../Counter.tsx";

export default function Stories() {
  return (
    <>
      <Counter start={3} />
    </>
  );
}

export const description = `
# You can use markdown here

\`\`\`tsx
<ColoredButton>
  Usage
</ColoredButton>
\`\`\`


`;
