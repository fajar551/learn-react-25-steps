const ButtonRed = (props) => {
  const { children = 'Default', variant = 'bg-black' } = props
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit">
      {children}
    </button>
  );
}

export default ButtonRed