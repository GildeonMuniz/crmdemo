select top 100 cli.Nome, c.grupoid, c.cota,c.ProdutoID,h.*,v.*
from 
	tblconsorcio  c 
	inner join tblVenda v on c.clienteid = v.clienteid
	inner join tblVendaHistorico h  on v.VendaID=h.VendaID
	inner join tblcliente cli on cli.clienteid= c.clienteid
where  v.pessoaid =64 and c.ProdutoID=12   -- and  v.clienteid=1461721  
order by c.consorcioid desc