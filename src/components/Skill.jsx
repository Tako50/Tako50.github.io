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
    { name: "Unity/C#", value: 300, description: "1年" },
    { name: "HTML/CSS", value: 200, description: "3ヶ月" },
    { name: "JavaScript", value: 200, description: "3ヶ月" },
    { name: "Arduino", value: 100, description: "1ヶ月" },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
          <XAxis type="number" tick={false} axisLine={false} />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fill: "#444", fontSize: "15px" }}
            axisLine={false}
          />

          <Tooltip
            cursor={false} // 👈 これがキモ！
            content={({ payload }) => {
              if (payload && payload.length) {
                const { name, description } = payload[0].payload;
                return (
                  <div
                    style={{
                      backgroundColor: "#333",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      fontSize: "14px",
                      fontFamily: "Arial, sans-serif",
                      width: "200px",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "5px",
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      {name}
                    </div>
                    {description && (
                      <div
                        style={{
                          fontStyle: "italic",
                          fontSize: "12px",
                          color: "#cfd8dc",
                        }}
                      >
                        {`Experience: ${description}`}
                      </div>
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
  );
}

export default Skill;
