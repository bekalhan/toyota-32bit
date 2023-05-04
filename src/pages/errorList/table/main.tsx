import React from 'react'
import ReactDOM from 'react-dom/client'
import { Typography , Box , Grid , Stack} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import '../../../index.css';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { makeData, Error } from './makeData'
import { useVirtual } from 'react-virtual'

function Main() {
  const rerender = React.useReducer(() => ({}), {})[1]

  const [sorting, setSorting] = React.useState<SortingState>([])


  const getColor = (code:string) => {
    if(code === "#d7dfe3" || code === "#fffefe" || code === "#f6f6f6" || code === "#ffffff"){
      return "black";
    }else{
      return "white";
    }
  }

  const columns = React.useMemo<ColumnDef<Error>[]>(
    () => [
      {
        accessorFn: row => row.depCode,
        id: 'depCode',
        cell: info => info.getValue(),
        header: () => <span>Bildiren</span>,
        size:50
      },
      {
        accessorKey: 'bodyNo',
        cell: info => info.getValue(),
        header: () => <span>Body</span>,
        size:30

      },
      {
        accessorKey: 'assy',
        cell: info => info.getValue(),
        header: () => <span>Assy</span>,
        size:20
      },
      {
        accessorFn: row => row.vinNo,
        id: 'VinNo',
        cell: info => info.getValue(),
        header: () => <span>Vin No</span>,
        size:100

      },
      {
        accessorKey: 'renk',
        cell: info => <Box sx={{backgroundColor:`${info.getValue()}`,width:'54px',borderRadius:'8px',height:'30px',justifyContent:'flex-start'}}>
        <Typography sx={{fontWeight:'bold',color:`${getColor(info.row.original.renk)}`,textAlign:'center',padding:0.5}}>{info.row.original.colorCode}</Typography>
      </Box>,
        header: () => <Typography sx={{fontWeight:'bold',padding:1}}>Renk</Typography>,
        size:33,
      },
      {
        accessorFn: row => row.modelCode,
        id: 'modelCode',
        cell: info =><Typography sx={{textAlign:'left'}}>{info.getValue() as React.ReactNode}</Typography>,
        header: () => <span>Mdl</span>,
        size:50
      },
      {
        accessorFn: row => row.localId,
        id: 'localId',
        cell: info =><Typography sx={{textAlign:'left'}}>{info.getValue() as React.ReactNode}</Typography>,
        header: () => <span>Sicil</span>,
        size:60
      },
      {
        accessorFn: row => row.partName,
        id: 'partName',
        cell: info => <Typography sx={{color:'red',textDecoration:'underline',textAlign:'left'}}>{info.getValue() as React.ReactNode}</Typography>,
        header: () => <span>Parca</span>,
        size:150
      },
      {
        accessorFn: row => row.spot,
        id: 'Spot',
        cell: info => info.getValue(),
        header: () => <span>Spot</span>,
        size:20
      },
      {
        accessorFn: row => row.gun,
        id: 'Gun',
        cell: info => info.getValue(),
        header: () => <span>Gun</span>,
        size:20
      },
      {
        accessorFn: row => row.arc,
        id: 'Arc',
        cell: info => info.getValue(),
        header: () => <span>Arc</span>,
        size:20
      },
      {
        accessorFn: row => row.arcGun,
        id: 'arcGun',
        cell: info => info.getValue(),
        header: () => <span>ArcGun</span>,
        size:40
      },
      {
        accessorFn: row => row.hata,
        id: 'hata',
        cell: info => <Typography sx={{textAlign:'left'}}>{info.getValue() as React.ReactNode}</Typography>,
        header: () => <span>Hata</span>,
        size:100
      },
      {
        accessorFn: row => row.rank,
        id: 'Rank',
        cell: info => info.getValue(),
        header: () => <span>Rank</span>,
        size:40
      },
      {
        accessorFn: row => row.saat,
        id: 'saat',
        cell: info => <Typography sx={{textAlign:'left'}}>{info.getValue() as React.ReactNode}</Typography>,
        header: () => <span>Saat</span>,
        size:50
      },
      {
        accessorFn: row => row.hataTuru,
        id: 'hataTuru',
        cell: info => info.getValue(),
        header: () => <span>Hata Türü</span>,
        size:50
      },
      {
        accessorFn: row => row.hataSor,
        id: 'hataSor',
        cell: info => <Typography sx={{textAlign:'left'}}>{info.getValue() as React.ReactNode}</Typography>,
        header: () => <span>Hata Sor</span>,
        size:60
      },
      {
        accessorFn: row => row.altSorumlu,
        id: 'altSorumlu',
        cell: info =>info.getValue(),
        header: () => <span>AltSorumlu</span>,
        size:50
      },
      {
        id: 'nrReason',
        cell: info =>info.getValue(),
        header: () => <span>NR REASON</span>,
        size:80
      },
      {
        id: 'Kaydet',
        cell: info =>
        <Box sx={{width:'80%',height:'40px',backgroundColor:'black',borderRadius:'8px',display:'flex',justifyContent:'center',marginLeft:'0.5em',marginTop:'0.5em'}}>
          <SaveIcon sx={{color:'white',marginTop:'0.2em',fontSize:'28px'}} />
        </Box>,
        header: () => <span>Kaydet</span>,
        size:60
      },
      {
        id: 'İslem',
        cell: info =>
        <Stack direction="row">
        <Box sx={{width:'50%'}}>
            <Box sx={{width:'80%',height:'40px',backgroundColor:'red',borderRadius:'8px',display:'flex',justifyContent:'center',marginLeft:'0.5em',marginTop:'0.6em'}}>
              <EditIcon sx={{color:'white',fontSize:'28px',marginTop:'0.2em'}} />
            </Box>
        </Box>
        <Box sx={{width:'50%'}}>
            <Box sx={{width:'80%',height:'40px',backgroundColor:'red',borderRadius:'8px',display:'flex',justifyContent:'center',marginLeft:'0.5em',marginTop:'0.6em'}}>
              <DeleteIcon sx={{color:'white',fontSize:'28px',marginTop:'0.2em'}} />
            </Box>
        </Box>
      </Stack>,
        header: () => <span>İşlem</span>,
        size:120
      },
    ],
    []
  )

  const [data, setData] = React.useState(() => makeData(1000))

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  })

  const tableContainerRef = React.useRef<HTMLDivElement>(null)

  const { rows } = table.getRowModel()
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  })
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer

  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0

  return (
    <div className="all">
      <div className="all-2" />
      <div ref={tableContainerRef} className="container">
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {paddingTop > 0 && (
              <tr>
                <td style={{ height: `${paddingTop}px` }} />
              </tr>
            )}
            {virtualRows.map(virtualRow => {
              const row = rows[virtualRow.index] as Row<Error>
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
            {paddingBottom > 0 && (
              <tr>
                <td style={{ height: `${paddingBottom}px` }} />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Main;
