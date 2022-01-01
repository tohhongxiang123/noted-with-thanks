interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: 'red' | 'green' | 'blue' | 'grey',
    variant?: 'light' | 'filled'
}

/**
 * Default Button
 */
export default function Button({ className, color, variant = 'filled', ...props }: ButtonProps) {
    const defaultClassNames = 'font-semibold py-2 px-4 rounded'
    const disabledClassNames = 'opacity-50 pointer-events-none'
    return <button {...props} className={`${defaultClassNames} ${getButtonClassNames(color, variant)} ${props.disabled ? disabledClassNames : ''} ${className}`} />
}

function getButtonClassNames(color: ButtonProps['color'], variant: ButtonProps['variant']) {
    if (variant === "filled") {
        switch(color) {
            case 'red':
                return 'bg-red-500 hover:bg-red-600 text-white'
            case 'green':
                return 'bg-green-600 hover:bg-green-700 text-white'
            case 'blue':
                return 'bg-blue-500 hover:bg-blue-700 text-white'
            case 'grey':
                return 'bg-gray-300 hover:bg-gray-400 text-gray-800'
            default:
                return 'bg-transparent hover:bg-gray-100 text-gray-800'
        }
    }

    switch(color) {
        case 'red':
            return 'bg-red-200 hover:bg-red-300 text-red-700'
        case 'green':
            return 'bg-green-300 hover:bg-green-400 text-green-700'
        case 'blue':
            return 'bg-blue-200 hover:bg-blue-300 text-blue-700'
        case 'grey':
            return 'bg-gray-200 hover:bg-gray-300 text-gray-700'
        default:
            return 'bg-transparent hover:bg-gray-100 text-gray-800'
    }
}