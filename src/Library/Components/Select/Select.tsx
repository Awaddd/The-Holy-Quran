import React from "react"

export interface SelectProps {
    label: string
    options: [{
        label: string
        value: string | number
    }]
    selected?: string
    action?: () => void
    classes?: string
}

function Select({ label, options, selected, action, classes = 'w-full max-w-xs' }: SelectProps) {
    return (
        <div className={`form-control ${classes}`}>
            <label className="label"><span className="label-text">{label}</span> </label> 
            <select className="select select-bordered w-full" onChange={action} value={selected}>
                {options.map((option, key) => (
                    <option key={key} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Select