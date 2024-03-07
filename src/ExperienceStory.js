import attributes from './attribute.json';
import { Experience } from './Experience';
import { StoryWrapper } from './StoryWrapper';

export default { title: 'Experience' };

export function ExperienceStory() {
  return <StoryWrapper attributes={attributes} component={Experience} />;
}