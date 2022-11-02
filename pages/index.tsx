
var fileStyle = "block rounded-xl w-full text-sm text-slate-500 " +
                "file:mr-4 file:py-2 file:px-4 " +
                "file:rounded-xl file:border-0 " +
                "file:text-sm file:font-semibold " +
                "file:bg-violet-50 file:text-violet-700 " +
                "hover:file:bg-violet-100"

export default function Home() {
  return <form className="flex items-center space-x-6">
    <div className="px-5">
      <label className="block">
        <span className="sr-only">Choose profile photo</span>
        <input type="file" className={fileStyle}/>
      </label>
    </div>
  </form>
}
