import React, { useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import { useTheme } from '../context/ThemeProvider'



const GithubCommit = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

 

  // Purple palette, with empty boxes (grade0) white in light, dark in dark
  const purpleTheme = theme === 'light'
    ? {
        light: ['#d1d5db', '#d8b4fe', '#a78bfa', '#7c3aed', '#6d28d9'],
        dark: ['#d1d5db', '#d8b4fe', '#a78bfa', '#7c3aed', '#6d28d9'],
        text: '#a78bfa',
        grade4: '#6d28d9',
        grade3: '#7c3aed',
        grade2: '#a78bfa',
        grade1: '#d8b4fe',
        grade0: '#d1d5db', // neutral-300 for empty in light mode
        background: 'transparent',
      }
    : {
        light: ['#52525b', '#d8b4fe', '#a78bfa', '#7c3aed', '#6d28d9'],
        dark: ['#52525b', '#d8b4fe', '#a78bfa', '#7c3aed', '#6d28d9'],
        text: '#7c3aed',
        grade4: '#6d28d9',
        grade3: '#7c3aed',
        grade2: '#a78bfa',
        grade1: '#d8b4fe',
        grade0: '#52525b', // neutral-600 for empty in dark mode
        background: 'transparent',
      };

  return (
    <div className=''>
        <div className='orbitron-custom w-full h-full flex flex-col items-center justify-center px-2'>
      <h1 className='text-2xl font-bold mb-4'>My GitHub Contributions</h1>
      <GitHubCalendar username="ikeshav26" theme={purpleTheme} colorScheme={isDarkMode ? 'dark' : 'light'} blockSize={7.5} blockMargin={2}/>
    </div>
    </div>
  )
}

export default GithubCommit