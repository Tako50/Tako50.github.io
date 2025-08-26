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
    <section className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto py-8 px-4 sm:px-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
        Skill
      </h2>
      <div className="w-full h-[250px] sm:h-[300px] md:h-[400px]">
        <ResponsiveContainer>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 20, left: 50, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
            <XAxis type="number" tick={false} axisLine={false} />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fill: "#444", fontSize: 12 }}
              axisLine={false}
              width={80}
            />
            <Tooltip
              cursor={false}
              content={({ payload }) => {
                if (payload && payload.length) {
                  const { name, description } = payload[0].payload;
                  return (
                    <div className="bg-gray-800 text-white p-3 rounded-lg shadow text-sm w-48 font-sans">
                      <div className="mb-1 font-bold text-base">{name}</div>
                      {description && (
                        <div className="italic text-xs text-blue-100">{`Experience: ${description}`}</div>
                      )}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="value"
              fill="url(#gradient)"
              radius={[20, 20, 20, 20]}
              barSize={20}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8e44ad" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#3498db" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default Skill;
