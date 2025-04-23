import { useEffect, useState } from 'react';
import { Skill } from '@/lib/utils';

interface SkillBarProps {
  skill: Skill;
  isVisible: boolean;
  delay?: number;
}

export default function SkillBar({ skill, isVisible, delay = 0 }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isVisible) {
      timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
    } else {
      setWidth(0);
    }
    
    return () => clearTimeout(timer);
  }, [isVisible, skill.level, delay]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-medium text-dark">{skill.name}</span>
        <span className="text-sm font-medium text-gray-medium">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}