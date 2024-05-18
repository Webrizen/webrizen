import React from 'react';

const BlogBodyRenderer = ({ body }) => {
  const renderBlock = (block) => {
    switch (block.style) {
      case 'h2':
        return <h2 className="text-3xl font-bold my-4">{block.children[0].text}</h2>;
      case 'normal':
        return <p className="text-base my-2">{block.children[0].text}</p>;
      default:
        return null;
    }
  };

  const renderList = (blocks, level = 1) => {
    return (
      <ul className={`list-disc ${level > 1 ? 'ml-8' : 'ml-4'} my-2`}>
        {blocks.map(block => (
          <li key={block._key} className="mb-1">
            {block.children.map(child => child.text).join('')}
            {block.level && block.children.length > 0 && renderList(block.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <article className="prose prose-lg max-w-none">
      {body.map((block, index) => {
        if (block._type === 'block') {
          return renderBlock(block);
        } else if (block.listItem) {
          return renderList([block]);
        }
        return null;
      })}
    </article>
  );
};

export default BlogBodyRenderer;