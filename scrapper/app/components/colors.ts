export const colors = [
    // Core + Extended colors
    "text-primary",
    "text-teal-800", "text-teal-700", "text-teal-600",
    "text-green-800", "text-green-700", "text-green-600",
    "text-orange-800", "text-orange-700", "text-orange-600",
    "text-blue-800", "text-blue-700", "text-blue-600",
    "text-red-800", "text-red-700", "text-red-600",
    "text-purple-800", "text-purple-700", "text-purple-600",
    "text-pink-800", "text-pink-700", "text-pink-600",
    "text-yellow-800", "text-yellow-700", "text-yellow-600",
    "text-emerald-800", "text-emerald-700", "text-emerald-600",
    "text-cyan-800", "text-cyan-700", "text-cyan-600",
    "text-indigo-800", "text-indigo-700", "text-indigo-600",
    "text-rose-800", "text-rose-700", "text-rose-600",
    "text-lime-800", "text-lime-700", "text-lime-600",
    "text-fuchsia-800", "text-fuchsia-700", "text-fuchsia-600",
    "text-sky-800", "text-sky-700", "text-sky-600",
    "text-violet-800", "text-violet-700", "text-violet-600",
    "text-amber-800", "text-amber-700", "text-amber-600",
    "text-stone-800", "text-stone-700", "text-stone-600",
    "text-zinc-800", "text-zinc-700", "text-zinc-600",
    "text-neutral-800", "text-neutral-700", "text-neutral-600",
    "text-gray-800", "text-gray-700", "text-gray-600",
    "text-slate-800", "text-slate-700", "text-slate-600",
];

export const getColor = () => {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
};
