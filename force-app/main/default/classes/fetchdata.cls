public class fetchdata {
@AuraEnabled(cacheable=true)
    public static list<Account> fetchAccountdata()
    {
        return[select id,name,phone from Account];
    }
}