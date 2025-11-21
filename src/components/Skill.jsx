import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function Skill() {
  const data = [
    { name: "Python", value: 500, description: "3年" },
    { name: "C", value: 400, description: "2年" },
    { name: "JavaScript", value: 300, description: "1年" },
    { name: "HTML/CSS", value: 300, description: "1年" },
    { name: "Unity/C#", value: 300, description: "1年" },
    { name: "Arduino", value: 100, description: "1ヶ月" },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto py-10 px-6 clean-card animate-fade-in">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-800 dark:text-slate-100">
        Skill Experience
      </h2>
      <div className="w-full h-[250px] sm:h-[300px] md:h-[400px]">
        <ResponsiveContainer>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 20, left: 50, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" opacity={0.2} />
            <XAxis type="number" tick={false} axisLine={false} />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
              axisLine={false}
              width={80}
            />
            <Tooltip
              cursor={{ fill: 'rgba(0,0,0,0.05)' }}
              content={({ payload }) => {
                if (payload && payload.length) {
                  const { name, description } = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg text-sm w-48 font-sans">
                      <div className="mb-1 font-bold text-base text-teal-700 dark:text-teal-400">{name}</div>
                      {description && (
                        <div className="italic text-xs text-slate-500 dark:text-slate-400">{`Experience: ${description}`}</div>
                      )}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="value"
              fill="#0f766e"
              radius={[0, 4, 4, 0]}
              barSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default Skill;
