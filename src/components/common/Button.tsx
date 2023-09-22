type ButtonProps = {
  name: string;
  id?: string;
};

export const Button = ({ name }: ButtonProps) => {
  return (
    <button className="block m-auto font-Montserrat px-12 py-4 mt-6 text-xs font-bold text-white rounded shadow-md bg-gradient-to-l from-purple-500 to-fuchsia-500 mb-12 md:mb-24">
      {name}
    </button>
  );
};
