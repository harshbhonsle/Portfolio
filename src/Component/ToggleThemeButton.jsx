import {useContext, useState} from 'react'
import { ThemeContext } from '../Context/theme'

const ToggleThemeButton =()=>{
    const {themeMode, setThemeMode} = useContext(ThemeContext)
    const [isChecked, setIsChecked] = useState(themeMode ==='light')

    const changeTheme = ()=>{
        if(themeMode ==='light') setThemeMode('dark')
            else setThemeMode('light');

        setIsChecked(!isChecked);
    }

    return (
        <div className='w-fit mx-auto '>
            <div
                onClick={changeTheme}
                className={`flex w-10 h-5 transition-all rounded-full ${isChecked ? 'bg-blue-500' : 'bg-red-500'}`}
            >
                <span
                    className={`h-5 w-5 bg-white rounded-full transition-all ${isChecked ? 'ml-5' : 'ml-0'}`}
                />
            </div>
        </div>
    )
}
export default ToggleThemeButton