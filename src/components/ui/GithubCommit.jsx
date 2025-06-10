import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import { useTheme } from '../context/ThemeProvider'

const GithubCommit = () => {
  const { theme } = useTheme();

  // Purple palette, with empty boxes (grade0) white in light, dark in dark
  const purpleTheme = theme === 'light'
    ? {
        light: ['#232136', '#d8b4fe', '#a78bfa', '#7c3aed', '#6d28d9'],
        dark: ['#232136', '#d8b4fe', '#a78bfa', '#7c3aed', '#6d28d9'],
        text: '#a78bfa',
        grade4: '#6d28d9',
        grade3: '#7c3aed',
        grade2: '#a78bfa',
        grade1: '#d8b4fe',
        grade0: '#232136', // dark for empty in dark mode
        background: 'transparent',
      }
    : {
        light: ['#fff', '#d8b4fe', '#a78bfa', '#7c3aed', '#6d28d9'],
        dark: ['#fff', '#d8b4fe', '#a78bfa', '#7c3aed', '#6d28d9'],
        text: '#7c3aed',
        grade4: '#6d28d9',
        grade3: '#7c3aed',
        grade2: '#a78bfa',
        grade1: '#d8b4fe',
        grade0: '#fff', // white for empty in light mode
        background: 'transparent',
      };

  return (
    <div className='h-screen w-full'>
        <div className='w-full h-full flex flex-col items-center justify-center px-2'>
      <h1 className='text-2xl font-bold mb-4'>My GitHub Contributions</h1>
      <GitHubCalendar username="ikeshav26" theme={purpleTheme} />
    </div>
    </div>
  )
}

export default GithubCommit
