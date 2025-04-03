import Child from "./Child";

const Parent = () => {
  return (
    <>
      <div>
        <p>
          <strong>Esse é o componente pai</strong>
        </p>
        {/* chamando o componente filho */}
        <Child/>
      </div>
    </>
  );
};
export default Parent;
