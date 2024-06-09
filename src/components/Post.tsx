export function Post({ name, content }: { name: string; content: string }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{content}</p>
    </div>
  );
}
