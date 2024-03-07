import { Box, rem } from '@mantine/core';

export function ComponentPreview({ children, canvas, withSpacing = false }) {
  return (
    <Box
      style={{
        paddingTop: canvas?.maxWidth && withSpacing ? rem(40) : 0,
        maxWidth: canvas?.maxWidth ? rem(canvas.maxWidth) : '100%',
        marginLeft: canvas?.center ? 'auto' : 'unset',
        marginRight: canvas?.center ? 'auto' : 'unset',
      }}
    >
      {children}
    </Box>
  );
}