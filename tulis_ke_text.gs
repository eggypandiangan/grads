'reinit'
'sdfopen ../../precip.mon.mean.nc'
'set gxout print'
'set prnopts %6.2f 1 1'
*%6.2f: c format, 1: values to plot on each line, ;space between values
'set time jan1979' 
'q dims'
xline=sublin(result,2)
yline=sublin(result,3)
xmax=subwrd(xline,13) 
ymax=subwrd(yline,13)
say 'X grid-points: 'xmax
say 'Y grid-points: 'ymax
y=1
while(y<=ymax)
x=1
while(x<=xmax)
'set x 'x
'set y 'y
'd precip'
* NOTE: It may be useful to test this to find out where the data is contained with in the result
* It just so happens that in this case, the data is the 1st word of the 2nd line, this is not always true
tmp=sublin(result,2)
tmp=subwrd(tmp,1)
'q dims'
lons=sublin(result,2)
lats=sublin(result,3)
lon=subwrd(lons,6)
lat=subwrd(lats,6)
*Save data to file
*Note the "append", so to add to the file instead of overwriting it
write('GPCP.txt',x'  'y'  'lon'  'lat'  'tmp, append)
x=x+1
endwhile
y=y+1
endwhile
