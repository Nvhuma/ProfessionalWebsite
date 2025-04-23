import { useState, useEffect } from 'react';
import { Skill } from '@/lib/utils';

interface SkillBarProps {
  skill: Skill;
  isVisible: boolean;
  delay?: number;
}

export default function SkillBar({ skill, isVisible, delay = 0 }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isVisible) {
      timeout = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
    } else {
      setWidth(0);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible, skill.level, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-dark">{skill.name}</span>
        <span className="text-sm font-medium text-gray-medium">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}
