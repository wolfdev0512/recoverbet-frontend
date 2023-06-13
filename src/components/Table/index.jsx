import React from 'react'

import Pager from '../Pager'
import './style.css'


const defaultOptions = {
	hidePager: false
}

// const limitList = [10, 25, 50, 100]

const Table = ({header, page, limit, total, fields, hiddenField, options, filters, sortFields, data, onData}) => {

	const [status, setStatus] = React.useState({
		limit: limit || 5,
		page,
		filters: {},
		sortFields: {}
	})
	const currentOptions = {...defaultOptions, ...options}

	React.useEffect(() => {
		if (onData) onData(0, status.limit)
	}, [onData, status.limit])

	const onPage = (page, limit) => {
		setStatus({...status, page, limit})
		if (onData) onData(page, limit, status.filters, status.sortFields)
	}

	return (
		<div className='table'>
			{/* {(header || !currentOptions.hidePager) && (
				<div className='tbl-header'>
					<div style={{color: 'var(--color-secondary)'}}>{header}</div>
					{!currentOptions.hidePager && (
						<div>
							<Pager page={status.page} total={total} onChange={page=>onPage(page, status.limit)} />
						</div>
					)}
				</div>
			)} */}
			<div className='tbl-body scroll'>
				<table>
					{!hiddenField && (
						<thead>
							<tr>
								{fields.map((f, k)=>(typeof f==='string' ? <th key={k}>{f}</th> : <th key={k} style={{textAlign: f.align || 'left'}}>{f.label}</th>))}
							</tr>
						</thead>
					)}
					<tbody>
						{data.length===0 ? (
							<tr>
								<td colSpan={fields.length}>
									<p className='nodata'>You have no data</p>
								</td>
							</tr>
						)
						: data.map((i, k) => (
							<tr key={k}>
								{fields.map((f, m) => {
									if (typeof f==='string') return (<td key={m}>{i[f] || ''}</td>)
									return (<td key={m} style={{textAlign: f.align || 'left'}}>{f.render ? f.render(i[f.key], i, k) : i[f.key]}</td>)
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{!currentOptions.hidePager && (
				<div className='tbl-footer'>
					{/* <div className='d-middle gap'>
						<span className='gray'>Show</span>
						<select className='btn' value={status.limit} onChange={(e) => onPage(status.page, Number(e.target.value))}>
							{limitList.map(i=><option key={i} value={i}>{i}</option>)}
						</select>
						<span className='gray'>Records</span>
					</div> */}
					<div>
						<Pager page={status.page} total={total} onChange={page=>onPage(page, status.limit)} />
					</div>
				</div>
			)}
		</div>
	)
};

export default Table