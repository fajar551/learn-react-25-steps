import React from "react";

// Class Component
// class Button extends React.Component {
//   render() {
//     return (
//       <button class="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white" type="submit">
//         Buy now
//       </button>
//     );
//   }
// }

// Function Component
// function ButtonBlack() {
//   return (
//     <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
//       Button Black
//     </button>
//   );
// }

// Arrow Function
const ButtonRed = (props) => {
  // Konsep distuctering di pecah
  const { children = 'Default', variant = 'bg-black' } = props
  return (
    <button
      // className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`}
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit">
      {children}
    </button>
  );
}

function App() {
  return (
    <div className="flex flex-col justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        {/* <Button />
        <Button> </Button> */}

        {/* <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button> */}
        {/* <ButtonBlack></ButtonBlack> */}

        <ButtonRed variant="bg-red-700">Login</ButtonRed>
        <ButtonRed variant="bg-slate-700">Logout</ButtonRed>
        <ButtonRed variant="bg-black">Register</ButtonRed>
        <ButtonRed ></ButtonRed>
        {/* <ButtonRed variant="black"></ButtonRed>
        <ButtonRed variant="black"></ButtonRed>
        <ButtonRed variant="black"></ButtonRed> */}

      </div>

    </div>
  )
}

export default App