SELECT a1,a2,a11,a8,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38,a39,a40,a41  
where  a8>70  
order by parseInt(a8) desc 
WITH (header)


select a2, ARRAY_AGG(a8, v => v.sort().slice(0, 5)) 
group by a2 


select a1,a2, ARRAY_AGG(a2, v => v.sort().slice(0, 4))  
where a8>20 
group by a2 
WITH (header)
