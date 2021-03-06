'reinit'
'sdfopen ../../precip.mon.mean.nc'
'set lon -180 180'
'set time jan1979 dec1979'
'define clim=ave(precip,t+0,time=dec2010,12)'
'modify clim seasonal'
'set mproj robinson'
'set gxout shaded'

'set rgb 16 255 255 217'
'set rgb 17 249 253 203'
'set rgb 18 234 247 177'
'set rgb 19 205 235 178'
'set rgb 20 160 218 184'
'set rgb 21 111 199 189'
'set rgb 22 64 181 196'
'set rgb 23 38 155 193'
'set rgb 24 31 122 181'
'set rgb 25 35 86 164'
'set rgb 26 37 55 149'
'set rgb 27 17 36 108'
'set rgb 28 7 28 87'

'set rgb 29 240 232 0'
'set rgb 30 246 189 0'
'set rgb 31 255 119 0'
'set rgb 32 254 0 0'
'set rgb 33 229 0 24'
'set rgb 34 210 0 100'
'set rgb 35 195 0 155'
'set rgb 36 254 0 254'

*'set clevs 0 2 4 6 8 10'
*'set ccols 16 18 20 22 24 26'

'set clevs 0 1 2 3 4 5 6 7 8 9 10 11'
'set ccols 16 17 18 19 20 21 22 23 24 25 26 27 28'

'set t 1'
'define angp=ave(clim,t=1,t=12)'
*'define angp=sum(clim,t=1,t=12)'
*'d clim'
'd angp'
'cbarn'
'printim gpcp.png white x1280 y960'
