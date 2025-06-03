// components/CustomSubstackForm.tsx
export default function CustomSubstackForm() {
  const SUBSTACK_URL = 'https://goodtimerunningclub.substack.com';

  return (
    <div className="md:w-max lg:w-1/3 p-6 rounded-lg bg-white shadow-md">
      <h2 className="text-3xl font-bold tracking-tight text-primary pb-4">
        Join our Newsletter
      </h2>
      <form
        action={`${SUBSTACK_URL}/subscribe`}
        method="GET"
        target="_blank" 
        className="flex flex-col space-y-6"
      >
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Type your email..."
          className="w-full rounded-md border-gray-200 border-2 shadow-sm focus:border-primary focus:ring-primary py-3 px-3 text-base"
        />
        <button
          type="submit"
          className="inline-flex justify-center items-center rounded-md bg-primary px-4 py-3 text-white text-base font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Subscribe
        </button>
        <p className="text-sm text-gray-500">
          You’ll be redirected to Substack to confirm. <br/> We’ll never spam you.
        </p>
      </form>
    </div>
  );
}
