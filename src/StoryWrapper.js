import { ComponentPreview } from "./ComponentPreview";

export function StoryWrapper({ attributes, component: Component }) {
  return (
    <ComponentPreview canvas={attributes.canvas} withSpacing>
      <Component {...(attributes.props || null)} />
    </ComponentPreview>
  );
}