import { useColorMode } from 'theme-ui';

const modes = ['light', 'dark', 'cool', 'deep'];

function useCycleColor() {
  const [colorMode, setColorMode] = useColorMode();

  const cycleColorMode = () => {
    const i = modes.indexOf(colorMode);
    const n = (i + 1) % modes.length;
    setColorMode(modes[n]);
  };

  return { cycleColorMode };
}

export default useCycleColor;
