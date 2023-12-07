interface Container {
    Children: React.ReactNode;

}

const Container: React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div>{children}</div>
     );
}
 
export default Container;