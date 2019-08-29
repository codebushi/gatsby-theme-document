import { useColorMode } from 'theme-ui';

// const modes = ['light', 'black', 'dark', 'deep', 'hack', 'pink'];
const modes = ['light', 'dark'];

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
