import React from "react";

export default function StatsInfoCard({
  icon,
  label,
  value,
  color = "bg-blue-600",
}) {
  return (
    <div className={`flex items-center gap-3 p-4 rounded-2xl shadow ${color} text-white`}>
      <div className="text-2xl">{icon}</div>
      <div className="flex flex-col">
        <span className="text-xs opacity-90">{label}</span>
        <span className="text-lg font-semibold">{value}</span>
      </div>
    </div>
  );
}
