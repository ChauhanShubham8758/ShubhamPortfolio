import { useViewportSize } from '@mantine/hooks';

function useViewPort(){
    const {width}=useViewportSize();
    return width<425 ? "sm":"md";
}

export default useViewPort;